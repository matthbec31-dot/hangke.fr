const identifiants = [
    "matthieu.becuwe","antoine.vasseur","bastien.moriceau",
    "benoit.willaumez","cedric.bersch","clément.chrzaszcz",
    "denis.gillet","emilien.burgeat","ludovic.bober",
    "mehdi.bilem","nicolas.trioux","rayane.boudjemaa",
    "thibault.brisard","yohan.loquet","zakaria.savadogo"
];

const motDePasse = "AESC2026.hangke";

exports.handler = async (event) => {
    const { identifiant, password } = JSON.parse(event.body);
    const identifiantNormalise = identifiant.toLowerCase().trim();

    if (identifiants.includes(identifiantNormalise) && password === motDePasse) {
        return { statusCode: 200, body: JSON.stringify({ success: true }) };
    }
    return { statusCode: 401, body: JSON.stringify({ success: false }) };
};
