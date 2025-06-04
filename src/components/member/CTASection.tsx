const CTASection: React.FC = () => (
    <section className="py-20 px-4 bg-indigo-100 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-4">
                一歩踏み出してみたいと思ったら…
            </h2>
            <p className="text-lg text-gray-700 mb-8">
                参加はいつでもOKです。Slackで案内を見て「気になるかも」と思ったら、ぜひ声をかけてください。
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                    href="https://your-slack-link-here" // ← 実際のSlackリンクに置き換えてください
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
                >
                    Slackで声をかけてみる
                </a>
                <a
                    href="https://your-form-link-here" // ← GoogleフォームやNotionフォームなどでもOK
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-indigo-700 font-bold py-3 px-6 rounded-full border border-indigo-700 hover:bg-indigo-50 shadow-md transition transform hover:scale-105"
                >
                    フォームから申し込む
                </a>
            </div>
        </div>
    </section>
);

export default CTASection;
