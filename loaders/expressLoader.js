import config from "../config";
import api from "../routers";
import session from "express-session";
import cookieParser from "cookie-parser";
import express from "express";

const expressLoader = app => {
	app.use(session());
	app.use(cookieParser());
	app.use(express.urlencoded({}));

	app.use("", api);
	app.set("port", config.PORT);
};

export default expressLoader;
