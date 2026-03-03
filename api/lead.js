export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).send("Method not allowed");
}

try {

await fetch("https://hooks.zapier.com/hooks/catch/26582458/u0wuaju/", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(req.body)
});

return res.status(200).send("OK");

} catch (error) {
return res.status(500).send("Server Error");
}

}
