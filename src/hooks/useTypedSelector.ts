import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/rootStore";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
