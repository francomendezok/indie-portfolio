import type { Metadata } from "next";
import { Doc } from "../Doc";

export const metadata: Metadata = { title: "Marketio · Terms of Service" };

export default function MarketioTerms() {
    return (
        <Doc title="Marketio Terms of Service" updated="November 18, 2026">
            <p>
                Marketio is a private tool operated by Franco Mendez for publishing videos on his own YouTube channels. It is not
                offered to the public.
            </p>
            <h2>YouTube</h2>
            <p>
                Marketio uses the YouTube API Services. By using Marketio you agree to be bound by the{" "}
                <a href="https://www.youtube.com/t/terms">YouTube Terms of Service</a> and acknowledge the{" "}
                <a href="https://policies.google.com/privacy">Google Privacy Policy</a>. How Marketio handles data is described in
                its <a href="/marketio/privacy">Privacy Policy</a>.
            </p>
            <h2>Use</h2>
            <p>
                Marketio may only be used to upload and schedule videos on channels the user owns, with content the user has the
                rights to publish. Access can be revoked at any time from{" "}
                <a href="https://myaccount.google.com/connections">Google security settings</a>.
            </p>
            <h2>No warranty</h2>
            <p>Marketio is provided as is, without warranties of any kind.</p>
            <h2>Contact</h2>
            <p>Franco Mendez · francomendezok@gmail.com</p>
        </Doc>
    );
}
