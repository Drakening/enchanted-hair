import { motion } from "framer-motion";
import './FadeIn.css';

const FadeIn = ({ children }) => {
	const FadeInVariants = () => ({
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
                duration: 1,
                delay: 0.2
                
			},
		},
	});

	return (
		<motion.div
			variants={FadeInVariants()}
			initial='initial'
			whileInView='animate'
            viewport={{ once: true }}
            className="animation"
		>
			{children}
		</motion.div>
	);
};

export default FadeIn;
