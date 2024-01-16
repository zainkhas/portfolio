import { Content } from "@/components/Content";
import { FC } from "react";
import { AboutProps } from "./types";

const About: FC<AboutProps> = ({ about }) => <Content>{about}</Content>;
export default About;
