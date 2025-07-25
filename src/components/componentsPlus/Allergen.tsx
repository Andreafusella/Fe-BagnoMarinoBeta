export interface IAllergens {
  name: string;
  icon: string;
}

function Allergen({ allergen, index }: { allergen: IAllergens, index: number }) {
    return (
        <div key={index} className="rounded-lg border border-amber-200 bg-amber-50 flex items-center justify-center p-2 gap-2">
            <h1 className="text-xs">{allergen.icon}</h1>
            <h1 className="text-orange-400 text-xs">{allergen.name}</h1>
        </div>
    )
}

export default Allergen