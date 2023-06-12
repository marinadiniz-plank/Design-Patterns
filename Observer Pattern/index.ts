import { Subscriber } from "./Subscriber";
import { YouTube } from "./YouTube";

const youtuber1 = new YouTube("AlanZoca");
const youtuber2 = new YouTube("Jukes");

const subscriber1 = new Subscriber("Pedrinho123");
const subscriber2 = new Subscriber("RelampagoMarquinhos");
const subscriber3 = new Subscriber("SasukeS2");
const subscriber4 = new Subscriber("GokuMaisForte");

youtuber1.subscribe(subscriber1);
youtuber1.subscribe(subscriber3);
youtuber2.subscribe(subscriber2);
youtuber2.subscribe(subscriber4);

youtuber1.videoName("How to solve diction issues");
youtuber2.videoName("Control your rage: attempts 127");

youtuber2.unsubscribe(subscriber4);

youtuber1.videoName("PerFEct diction for 1 hour straight");
youtuber2.videoName("Finding here user6451 lives");
