import { useCallback, useEffect, useState } from "react";

interface KeyMap {
  [key: string]: string;
}

const getActionByKey = (key: string): string => {
  const keyMap: KeyMap = {
    ArrowUp: "moveForward",
    ArrowDown: "moveBackward",
    ArrowLeft: "moveLeft",
    ArrowRight: "moveRight",
    Space: "jump",
    Digit1: "textureOne",
    Digit2: "textureTwo",
    Digit3: "textureThree",
    Digit4: "textureFour",
    Digit5: "textureFive",
  };
  return keyMap[key];
};

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    textureOne: false,
    textureTwo: false,
    textureThree: false,
    textureFour: false,
    textureFive: false,
  });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const action = getActionByKey(e.code);

    if (action) {
      setActions((prev) => ({
        ...prev,
        [action]: true,
      }));
    }
  }, []);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    const action = getActionByKey(e.code);
    if (action) {
      setActions((prev) => ({
        ...prev,
        [action]: false,
      }));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });
  return actions;
};
