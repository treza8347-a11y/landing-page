export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({ message: "Method not allowed" });
}

try {

const response = await fetch("https://hooks.zapier.com/hooks/catch/26582458/u0wuaju/", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(req.body)
});

return res.status(200).json({ success: true });

} catch (error) {
return res.status(500).json({ success: false });
}

}
