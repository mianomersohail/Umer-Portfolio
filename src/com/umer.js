import { useState } from 'react';
import Resume from './resume';
import Project from './project';

export default function Umer() {
  const [isLogin, setIsLogin] = useState(false);
  const [ContentComponent, setContentComponent] = useState(null);

  const handleClick = () => {
    setIsLogin(!isLogin);

    if (isLogin) {
      setContentComponent(Resume);
    } else {
      setContentComponent(Project);
    }
  };

  return (
    <>
      {ContentComponent && <ContentComponent />}
      <button onClick={handleClick}>Click me</button>
    </>
  );
}
