import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      id="home" className="text-center font-bold flex flex-col items-center justify-around text-2xl gap-10 p-4">
      <p className="leading-[50px]">"Malhar não fica mais fácil, você que fica melhor a cada treino!" 🏋🏻‍♂️🏋🏻‍♀️</p>
      <p className="leading-[50px]">"Exercícios não mudam apenas o seu corpo. Muda a sua mente, atitudes e o seu humor!" 💪🏻</p>
    </motion.section>
  )
}

export default Home