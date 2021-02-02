import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
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
              chess={chess}
              position={{ x: j * SIZE, y: i * SIZE }}
              id={`${square.color}${square.type}` as const}
            />
          );
        })
      )}
    </View>
  );
};

export default Board;
