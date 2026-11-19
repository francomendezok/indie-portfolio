import type { Metadata } from "next";
import { Doc } from "../Doc";

export const metadata: Metadata = { title: "Marketio · Privacy Policy" };

export default function MarketioPrivacy() {
    return (
        <Doc title="Marketio Privacy Policy" updated="November 18, 2026">
            <p>
                Marketio is an internal tool operated by Franco Mendez (Argentina) to publish videos on his own YouTube channels.
                Its only user is the owner of those channels. Marketio uses the <strong>YouTube API Services</strong>, and its use
                of information received from Google APIs adheres to the{" "}
                <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>.
                Google&apos;s handling of data is described in the{" "}
                <a href="https://policies.google.com/privacy">Google Privacy Policy</a>.
            </p>
            <h2>Information we access</h2>
            <ul>
                <li>The authorized channel&apos;s id and title, to know which channel a video goes to.</li>
                <li>The list of videos the channel has uploaded, to avoid duplicate uploads and to show scheduled videos.</li>
                <li>An OAuth access token and refresh token issued by Google.</li>
            </ul>
            <p>Marketio does not access viewers&apos; data, comments, subscribers&apos; data or any other user&apos;s account.</p>
            <h2>How we use it</h2>
            <p>
                Only to upload, describe, add a thumbnail to and schedule the owner&apos;s own videos on the owner&apos;s own channels,
                at his request. The data is not sold, shared with third parties, used for advertising, or combined with other data.
            </p>
            <h2>Storage and security</h2>
            <p>
                Tokens are stored encrypted (AES-256-GCM) in a private database controlled by the owner. Channel ids and video ids
                of uploads are kept in local files on the owner&apos;s computer. Nothing is stored on any device of anyone else.
            </p>
            <h2>Retention and deletion</h2>
            <p>
                Data is kept while the channel stays connected. Disconnecting the channel in Marketio deletes its stored tokens and
                data within 7 days. You can also revoke Marketio&apos;s access at any time from{" "}
                <a href="https://myaccount.google.com/connections">Google security settings</a>, after which Marketio deletes the
                stored data within 7 days.
            </p>
            <h2>Cookies</h2>
            <p>Marketio does not place or read cookies or similar technologies on any user&apos;s device.</p>
            <h2>Contact</h2>
            <p>Franco Mendez · francomendezok@gmail.com</p>
        </Doc>
    );
}
