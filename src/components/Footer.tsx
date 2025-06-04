// Footer.tsx
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-blue-800 text-white py-12 ">
            <div className="container mx-auto text-center">
                <h3 className="text-xl font-semibold mb-4">ご覧いただきありがとうございました</h3>
                <p className="mb-4">
                    本資料は、社内の人財育成戦略の透明化と、共通認識の醸成を目的としています。
                    ご不明な点やご意見があれば、お気軽に担当者までお知らせください。
                </p>
                <p className="text-sm text-blue-200">
                    作成者：山下（仮名）／ プロジェクト名：「提案できるSE」人財育成計画
                </p>
            </div>
        </footer>
    );
}
