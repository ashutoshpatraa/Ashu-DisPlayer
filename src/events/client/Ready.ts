import { Events } from "discord.js";
import { env } from "../../env";
import { Event, type Lavamusic } from "../../structures/index";
import logger from "../../structures/Logger";
import { LavamusicEventType } from "../../types/events";
export default class Ready extends Event {
	constructor(client: Lavamusic, file: string) {
		super(client, file, {
			type: LavamusicEventType.Client,
			name: Events.ClientReady,
		});
	}

	public async run(): Promise<void> {
		logger.success(`${this.client.user?.tag} is ready!`);

		this.client.user?.setPresence({
			activities: [
				{
					name: env.BOT_ACTIVITY,
					type: env.BOT_ACTIVITY_TYPE,
				},
			],
			status: env.BOT_STATUS as any,
		});

		await this.client.manager.init({ ...this.client.user!, shards: "auto" });
	}
}

/**
 * Project: lavamusic
 * Author: Appu
 * Main Contributor: LucasB25
 * Company: Coders
 * Copyright (c) 2024. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/YQsGbTwPBx
 */
