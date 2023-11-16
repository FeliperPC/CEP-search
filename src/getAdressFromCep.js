export default async function getAdressCep(cep) {
    if (!cep) throw new Error('Você precisa de um CEP');
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();
    return data;
}
