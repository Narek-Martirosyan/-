import TypeAnimation from "react-type-animation";
import './typeAnimation.scss';

export const TypeAnimationComp =({ time, text, tag }) => {
    return (
        <div className="type-animation">
            <TypeAnimation
                cursor={false}
                sequence={[
                    time,
                    text
                ]}
                wrapper={tag}
                repeat={1}
            />
        </div>
    )
}
