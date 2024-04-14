import multer from "multer";
import mime from "mime-types";
import express, { Request, Response } from "express";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

//upload manga poster with multer
const storage = multer.diskStorage({
	destination: function (
		req: Request,
		file: Express.Multer.File,
		cb: DestinationCallback
	) {
		cb(null, process.env.POSTER_UPLOAD_PATH);
	},
	filename: function (
		req: Request,
		file: Express.Multer.File,
		cb: FileNameCallback
	) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(
			null,
			file.fieldname +
				"-" +
				uniqueSuffix +
				"." +
				mime.extension(file.mimetype)
		);
	},
});
const upload = multer({ storage: storage });

const router = express.Router();

router.post("/", upload, async (req: Request, res: Response) => {
	const { filename } = req.file;
	console.log("filename : ", filename);
	res.status(201).json({ msg: "manga created succesfully" });
});

export default router;