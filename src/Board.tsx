import React, { useCallback, useState } from "react";
import { View, StyleSheet, Dimensions, Alert } from "react-native";
import { Chess } from "chess.js";

import Background from "./Background";
import { useConst } from "./components/Hooks";
import Piece from "./Piece";
import { SIZE } from "./Notation";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
  },
});

const Board = () => {
  const chess = useConst(() => new Chess());
  const [state, setState] = useState({
    player: "w",
    board: chess.board(),
  });

  const onTurn = useCallback(
    () =>
      setState({
        player: state.player === "w" ? "b" : "w",
        board: chess.board(),
      }),
    [chess, state.player]
  );

  const restartGame = () => {};

  return (
    <View style={styles.container}>
      <Background />
      {state.board.map((row, i) =>
        row.map((square, j) => {
          if (square === null) {
            return null;
          }
          return (
            <Piece
              enabled={state.player === square.color}
              onTurn={onTurn}
              chess={chess}
              position={{ x: j * SIZE, y: i * SIZE }}
              id={`${square.color}${square.type}` as const}
            />
          );
        })
      )}
      {chess.game_over() &&
        Alert.alert(
          "Game Over!",
          `${state.player === "w" ? "Black" : "White"} won!`,
          [
            {
              text: "Restart",
              onPress: () => {
                restartGame();
              },
            },
            { text: "Cancel", onPress: () => console.log("Cancelled") },
          ]
        )}
    </View>
  );
};

export default Board;
