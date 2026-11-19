import type { Metadata } from "next";
import { Doc } from "./Doc";

export const metadata: Metadata = { title: "Marketio", description: "Internal publishing tool of Franco Mendez." };

export default function MarketioPage() {
    return (
        <Doc title="Marketio" updated="November 18, 2026">
            <p>
                Marketio is a private, internal tool used by Franco Mendez to prepare and publish short videos on his own
                YouTube channels: <strong>Sapiens</strong> (health and science content) and <strong>Franco Mendez</strong> (his
                personal channel). It is not offered to the public and has no other users.
            </p>
            <h2>What it does with YouTube</h2>
            <ul>
                <li>Uploads a finished short video from the owner&apos;s computer to his own channel.</li>
                <li>Sets the title, description and custom thumbnail he wrote for it.</li>
                <li>Schedules the video to go public at the date and time he chooses.</li>
                <li>Reads his channel&apos;s name and id, and the list of his own uploads, to avoid uploading the same video twice.</li>
            </ul>
            <p>
                Marketio uses the YouTube API Services. By using it you agree to be bound by the{" "}
                <a href="https://www.youtube.com/t/terms">YouTube Terms of Service</a>. See our{" "}
                <a href="/marketio/privacy">Privacy Policy</a> and <a href="/marketio/terms">Terms of Service</a>.
            </p>
            <p>Contact: francomendezok@gmail.com</p>
        </Doc>
    );
}
