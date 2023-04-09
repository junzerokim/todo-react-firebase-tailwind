const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
};

function App() {
  return (
    <div className={style.bg}>
      <div className={style.container}></div>
    </div>
  );
}

export default App;
