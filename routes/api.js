import { Router } from "express";
import client from "../lib/redis";
import encode from "../lib/encode";
import validate from "../lib/validate";

const router = Router();

router.get("/:hash", (req, res) => {
    const { hash } = req.params;
    if (hash) {
        client.get(hash, (err, url) => {
            if (!err && url) {
                return res.redirect(url);
            } else {
                return res.status(400).send({message: "No url found for hash"});
            }
        });
    } else {
        return res.status(400).send({message: "No hash provided"});
    }
});

router.post("/", (req, res) => {
    const { url } = req.body;
    if (url && validate(url)) {
        client.dbsize((err, count) => {
            if (!err) {
                const hash = encode(count);
                client.set(hash, url, (err, result) => {
                    if (!err) {
                        res.status(200).send(result);
                    } else {
                        res.status(500).send({message: err})
                    }
                });
            } else {
                res.status(500).send({message: err});
            }
        });
    } else {
        res.status(400).send({message: "Url not valid"});
    }
});

export default router;
