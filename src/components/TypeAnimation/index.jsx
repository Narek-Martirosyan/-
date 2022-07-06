import TypeAnimation from "react-type-animation";
import './style.scss';

export default function TypeAnimationComp({ time, text }) {
    return (
        <div className="type-animation">
            <TypeAnimation
                cursor={false}
                sequence={[
                    time,
                    text
                ]}
                wrapper="h2"
                repeat={1}
            />
        </div>
    )
}