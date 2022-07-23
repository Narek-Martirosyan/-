import ArticlesCard from "../../components/ArticlesCard"

export default function Articles() {
    return (
        <div>
            <ArticlesCard
                title={'Fixed broken To-do app'}
                text={'The application was intentionally broken, and there were following six critical issues that I had to fix:'}
                url={'/articles/fixedbrokentodo'}
            />
        </div>
    )
}
