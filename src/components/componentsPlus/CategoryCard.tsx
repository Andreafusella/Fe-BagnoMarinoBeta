import { getLucideIconByName } from "@/service/MenuService";

type Props = {
  title: string;
  icon: string;
  numberPlate: number;
  selected?: boolean;
  onClick?: () => void;
};

function CategoryCard({ title, icon, numberPlate, selected = false, onClick }: Props) {
  const IconComponent = getLucideIconByName(icon);

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-3xl flex flex-col items-center justify-center
                  p-3 cursor-pointer transform transition-shadow transition-colors transition-transform duration-300 ease-in-out
                  hover:-translate-y-1
                  w-[150px] h-[100px] sm:w-[170px] sm:h-[110px] md:w-[190px] md:h-[120px]
                  text-center backdrop-blur-md backdrop-saturate-150
                  border border-[rgb(200,236,241)]
                  ${selected
          ? "bg-[rgb(187,219,224)] shadow-[0_6px_20px_-2px_rgba(96,165,250,0.5)]"
          : "bg-[rgb(233,249,250)] hover:bg-[rgb(241,246,247)] shadow-[0_4px_12px_-2px_rgba(147,197,253,0.3)] hover:shadow-[0_8px_24px_-4px_rgba(147,197,253,0.5)]"
        }`}
    >
      {/* Badge con numero */}
      <div
        className="absolute -top-2 -right-2 bg-[rgb(222,238,241)] text-blue-900 text-sm
                   border-2 border-[rgb(200,236,241)] font-semibold w-9 h-9 flex items-center justify-center
                   rounded-full shadow-md
                   group-hover:shadow-lg group-hover:bg-[rgb(243,247,248)]"
      >
        {numberPlate}
      </div>

      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 mb-2" />
      <h3 className="text-sm sm:text-base md:text-base font-semibold hover:font-bold mt-2 leading-tight text-blue-900 drop-shadow-sm text-primary-color">
        {title}
      </h3>
    </div>
  );
}

export default CategoryCard;
