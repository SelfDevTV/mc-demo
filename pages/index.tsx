import { Physics, Debug } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { GameWorld } from "../components/GameWorld";
import { Player } from "../components/Player";

export default function Home() {
  return (
    <Canvas>
      <ambientLight />
      {/* <mesh position={[10, 1, 1]}>
        <boxGeometry />
        <meshBasicMaterial color="blue" args={[5, 5, 5]} />
      </mesh> */}
      <Physics>
        <Debug color="black" scale={1.1}>
          <Player />
        </Debug>

        <GameWorld />
      </Physics>
    </Canvas>
  );
}
