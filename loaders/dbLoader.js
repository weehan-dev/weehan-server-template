import mongoose from "mongoose";
import config from "../config";

const dbLoader = async () => {
	const connect = async () => {
		try {
			await mongoose.connect(config.MONGO_URL, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			});
		} catch (e) {
			console.log("몽고 디비 연결 실패");
			throw e;
		}
	};
	await connect();

	mongoose.connection.on("error", err => {
		console.error(err.message);
		connect();
	});
};

export default dbLoader;
