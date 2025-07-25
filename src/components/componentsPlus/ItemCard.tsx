import type { IAllergens } from "./Allergen";
import Allergen from "./Allergen";

interface Props {
  title: string;
  description: string;
  price: number;
  allergens: IAllergens[];
}

function ItemCard({ title, description, price, allergens }: Props) {
  return (
    <div className="p-6 sm:p-8 rounded-3xl border bg-white shadow-sm opacity-80">
      {/* Top section */}
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-2 sm:space-y-3 max-w-[75%]">
          <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
          <p className="text-sm sm:text-[15px] text-gray-600">{description}</p>
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-cyan-800 font-poppins whitespace-nowrap">
          {price.toFixed(2)}
          <span className="text-cyan-600">€</span>
        </p>
      </div>

      {/* Allergens section */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-2 mt-4 items-start sm:items-center">
        <h1 className="text-sm sm:text-base font-bold">Allergeni:</h1>
        <div className="flex flex-wrap gap-2">
          {allergens.map((allergen, index) => (
            <Allergen key={index} allergen={allergen} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;