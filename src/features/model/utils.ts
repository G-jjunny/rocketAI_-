export const getThemeBgClass = (theme?: string) => {
  switch (theme) {
    case "red":
      return "bg-[#C23030] text-white";
    case "green":
      return "bg-[#18868C] text-white";
    case "black":
      return "bg-[#292929] text-white";
    case "white":
      return "bg-white text-black border";
    default:
      return ""; // 기본값
  }
};
