export default function Step1() {
  return (
    <>
      <div className="w-full h-screen bg-bg2 text-white grid grid-cols-2 grid-rows-1 relative">



        <div className="flex flex-col justify-center items-center m-auto ">
          <div className="w-1/2">
            <h1 className="font-h1 text-6xl  text-left">Season 1</h1>
            <p className="font-txt text-xl font-light mt-2">
              Emmy award winner Bryan Cranston stars as Walt White is a
              down-on-his-luck chemistry teacher struggling to make ends meet
              for his wife (Anna Gunn) and physically challenged son (RJ Mitte).
              Everything changes when Walt receives a startling diagnosis:
              terminal lung cancer. With only a few years to live and nothing to
              lose, Walt uses his training as a chemist to cook and sell crystal
              meth with one of his former students (Aaron Paul). As his status
              grows, so do his lies, but Walt will stop at nothing to make sure
              his family is taken care of after he's gone, even if it means
              putting all their lives on the line. Executive produced by Vince
              Gilligan and Mark Johnson.
            </p>
          </div>

        </div>

        <div className="clip bg-bg3 flex justify-center items-center">
          <img src="./src/assets/saison.jpg" alt="" className="w-1/2" />
        </div>

      </div>
    </>
  );
}
