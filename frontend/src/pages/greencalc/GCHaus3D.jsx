import { Suspense, useState, Component } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, Grid } from '@react-three/drei';

const MODEL_URL = '/models/gartenhaus.glb';

function GartenhausModel() {
  const { scene } = useGLTF(MODEL_URL);
  return <primitive object={scene} />;
}

function PlatzhalterHaus() {
  return (
    <group>
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 2, 4]} />
        <meshStandardMaterial color="#d9c9a3" />
      </mesh>
      <mesh position={[0, 2.4, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[2.85, 1.2, 4]} />
        <meshStandardMaterial color="#7a4a30" />
      </mesh>
      <mesh position={[0, 0.6, 2.01]}>
        <planeGeometry args={[0.7, 1.2]} />
        <meshStandardMaterial color="#4a3221" />
      </mesh>
    </group>
  );
}

class ModelBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onFailed?.();
  }

  render() {
    return this.state.failed ? <PlatzhalterHaus /> : this.props.children;
  }
}

export default function GCHaus3D() {
  const [platzhalter, setPlatzhalter] = useState(false);

  return (
    <div className="gc-3d-page">
      <div className="gc-3d-header">
        <h1>Gartenhaus 3D</h1>
        <p className="gc-3d-hint">
          {platzhalter
            ? 'Platzhalter-Modell – echtes 3D-Modell folgt.'
            : 'Zum Drehen ziehen, mit zwei Fingern zoomen.'}
        </p>
      </div>

      <div className="gc-3d-canvas-wrap">
        <Canvas shadows camera={{ position: [5, 3.5, 6], fov: 45 }}>
          <color attach="background" args={['#eef2ea']} />
          <ambientLight intensity={0.7} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <Center>
            <Suspense fallback={null}>
              <ModelBoundary onFailed={() => setPlatzhalter(true)}>
                <GartenhausModel />
              </ModelBoundary>
            </Suspense>
          </Center>
          <Grid
            position={[0, -0.01, 0]}
            args={[20, 20]}
            cellColor="#c9d6bd"
            sectionColor="#a9bd94"
            fadeDistance={20}
          />
          <OrbitControls
            makeDefault
            enablePan={false}
            minDistance={3}
            maxDistance={15}
            maxPolarAngle={Math.PI / 2.1}
          />
        </Canvas>
      </div>
    </div>
  );
}
