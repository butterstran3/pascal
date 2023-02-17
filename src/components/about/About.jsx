import React from 'react';
import './about.css';

const About = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (index === "We love what we do.".length) {
          clearInterval(interval);
        }
        setText(text + "We love what we do.".charAt(index));
        setIndex(index + 1);
      }, 20);
      return () => clearInterval(interval);
    }, [index]);
}

export default About;