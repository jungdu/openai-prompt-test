import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.API_KEY || "",
});

describe("openai setup", () => {
	it("openai 호출이 이상 없이 됨", async () => {
		const openai = new OpenAIApi(configuration);
		const response = await openai.createCompletion({
			model: "text-davinci-003",
			max_tokens: 100,
			temperature: 0.5,
			prompt: "What is apple in Korean?",
		});

		console.log(response.data);
		expect(response.data.choices[0].text).toContain("사과");
	});
});
