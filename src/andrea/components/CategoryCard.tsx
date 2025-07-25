interface ICategoryCardProps {
    id: number;
    name: string;
    icon: string;
}

const CategoryCard = ({id, name, icon} : ICategoryCardProps) => {
    return (
        <div className="rounded-2xl bg-white p-4">
            <h1>{name}</h1>
            <h1>{icon}</h1>
        </div>
    )
}

export default CategoryCard