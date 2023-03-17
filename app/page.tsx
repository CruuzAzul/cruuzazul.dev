import styled from '../styles/home/home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styled.home}>
        <div className={styled.informationsLayer}>
          <div className={styled.details}>
            <h2>Mickaël Alves</h2>
            <h1>Web Developer</h1>
          </div>
        </div>
      </div>
    </>
  );
}