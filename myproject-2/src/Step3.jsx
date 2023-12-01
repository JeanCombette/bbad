export default function Step1() {
  return (
    <>
      <div className="w-full h-screen bg-bg2 text-white">
        <h1 className="text-2xl font-h2">Cast & characters</h1>
        <div className="grid grid-cols-3 grid-rows-1 m-auto">

          <div className="flex flex-col justify-center items-center">
            <img src="./src/assets/hank.png" alt="" />
            <h2 className="font-h1 text-3xl ">Dean Norris</h2>
            <p>played by Bryan Cranston</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src="./src/assets/walter.png" alt="" />
            <h2 className="font-h1 text-3xl ">Walter White</h2>
            <p>played by Bryan Cranston</p>
          </div>

          <div className="flex flex-col justify-center items-center">
          <img src="./src/assets/marie.png" alt="" />
          <h2 className="font-h1 text-3xl ">Walter White</h2>
          <p className="font-txt text-xl">played by Bryan Cranston</p>
          </div>
        </div>
      </div>
    </>
  );
}
