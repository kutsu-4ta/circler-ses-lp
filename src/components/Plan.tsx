// Plan.tsx
export default function Plan() {
    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                <h2 className="text-3xl font-semibold text-blue-700 mb-6">今後のアクションと計画</h2>
                <p className="text-gray-800 mb-4">
                    私たちは、人財育成を段階的かつ実践的に進めていくために、以下のようなステップを計画しています。
                </p>
                <ol className="list-decimal list-inside text-gray-700 mb-6">
                    <li>対象者のスキル診断とアセスメント実施</li>
                    <li>育成ゴールの個別設定（GROWモデルベース）</li>
                    <li>内製プログラムによる学習と現場実践</li>
                    <li>行動観察とフィードバックによる評価</li>
                    <li>次世代育成人財への役割移行と循環</li>
                </ol>
                <p className="text-gray-800 mb-4">
                    この計画においては、「一人でできる」ではなく「組織で育てる」ことを意識し、
                    メンター制度や評価フィードバックを通じて育成の文化を根づかせていきます。
                </p>
                <p className="text-gray-800">
                    成功の定義は、「提案できるSE」が自然と社内に生まれていく状態です。
                    その実現のために、私たちは仕組みと対話を両立させながら、人財の循環をデザインしていきます。
                </p>
            </div>
        </section>
    );
}
