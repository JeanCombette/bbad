import Imgs from "./Img";
export default function Step1() {
  return (
    <>
      <div className=""></div>

      <div className="w-full h-screen bg-bgw bg-cover bg-no-repeat  relative grid grid-cols-2 ">
        <div className="w-full">
          {/* <img src="./src/assets/wwhite.png" alt="" className="h-screen w-full saturate-0 z-0"/> */}
        </div>

        <div className="flex flex-col w-full m-3 justify-center">
          <h1 className="font-h1 text-7xl">Breaking Bad</h1>
          <h2 className="font-h2 text-4xl">
            2008 | Catégorie d'âge :16+ | 5 saisons | Drame
          </h2>
          <p className="font-txt text-3xl mt-6">
            Walter White, high-school chemistry teacher who had a diagnosis of
            stage-three lung cancer. White turns to a life of crime to produce
            methamphetamine and navigating the dangers of the criminal
            underworld.
          </p>
        </div>

        <div className="mix-blend-overlay bg-overlay absolute h-screen w-full"></div>
      </div>
    </>
  );
}
