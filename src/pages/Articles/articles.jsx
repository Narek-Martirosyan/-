import { ArticlesCard } from "../../components/ArticlesCard";
import 'animate.css';
import { useSelector } from "react-redux";
import { followArticlesPathname } from "../../features/followPathname/followPathnameSlice";

export const Articles = () => {
    const currentPathname = useSelector(followArticlesPathname);

    return (
        <div className={currentPathname.length <= 1 ? "animate__animated animate__backInDown" : ""}>
            <ArticlesCard
                title={'Fixed broken To-do app'}
                text={'The application was intentionally broken, and there were following six critical issues that I had to fix:'}
                url={'/articles/fixedbrokentodo'}
            />
        </div>
    )
}
