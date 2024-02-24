import dotenv from "dotenv";
import { println } from "../src/utils/base";
import { kBannerASCII } from "../src/utils/string";
import { runWithDB } from "../src/services/db";
import { testDB } from "./db";
import { testSpeaker } from "./speaker";
import { testOpenAI } from "./openai";

dotenv.config();

async function main() {
  println(kBannerASCII);
  // testDB();
  // testSpeaker();
  testOpenAI();
}

runWithDB(main);
