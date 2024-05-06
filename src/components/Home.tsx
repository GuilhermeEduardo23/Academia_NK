import "./Home.css";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const min: number = 1;
  const max: number = 25;
  const id: number = Math.floor(Math.random() * (max - min) + min);

  const API_URL: string = import.meta.env.VITE_API_URL;
  const url: string = `${API_URL}${id.toString()}`;
  const {sentence} = useFetch(url);
  
  return (
    <section
      id="home" className="text-center font-bold flex flex-col items-center justify-around text-2xl gap-5 p-5 bg-[#121813]">
      <h1 className="text-4xl text-center font-bold tracking-in-expand">Frase do Dia</h1>
      <p>{sentence?.sentence}</p>
      <p className="flex items-center">
        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Man%20Lifting%20Weights%20Light%20Skin%20Tone.png" alt="Man Lifting Weights Light Skin Tone" width="150" height="150" />
        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Man%20Lifting%20Weights%20Dark%20Skin%20Tone.png" alt="Man Lifting Weights Dark Skin Tone" width="150" height="150" />
      </p>
    </section>
  )
}

export default Home