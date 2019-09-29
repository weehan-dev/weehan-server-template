import dbLoader from "./dbLoader";
import expressLoader from "./expressLoader";

const loaders = async app => {
	console.log("로더 실행");
	await dbLoader();
	expressLoader(app);
	console.log("로더 완료");
};

export default loaders;
//module.exports = loaders;
