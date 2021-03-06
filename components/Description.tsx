import { FC } from 'react'
import { motion } from 'framer-motion'
import descriptionProps from '../utils/types/descriptionProps'

const Description: FC<descriptionProps> = (props) => {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        delay: 0.5,
        stiffness: 320,
        damping: 100,
        mass: 1.8
      }}
      className="px-5 sm:pl-10 md:pl-20 2xl:pl-40 py-1"
    >
      {props.description}
    </motion.div>
  )
}

export default Description
