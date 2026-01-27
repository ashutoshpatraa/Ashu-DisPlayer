import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { I18N } from "../../structures/I18n";
import { Command, type Context, type Lavamusic } from "../../structures/index";
import { EmbedLinks, ReadMessageHistory, SendMessages, ViewChannel } from "../../utils/Permissions";

export default class About extends Command {
	constructor(client: Lavamusic) {
		super(client, {
			name: "about",
			description: {
				content: I18N.commands.about.description,
				examples: ["about"],
				usage: "about",
			},
			category: "info",
			aliases: ["ab"],
			cooldown: 3,
			args: false,
			vote: false,
			player: {
				voice: false,
				dj: false,
				active: false,
				djPerm: null,
			},
			permissions: {
				dev: false,
				client: [SendMessages, ReadMessageHistory, ViewChannel, EmbedLinks],
				user: [],
			},
			slashCommand: true,
			options: [],
		});
	}

	public async run(client: Lavamusic, ctx: Context): Promise<any> {
		const inviteButton = new ButtonBuilder()
			.setLabel(ctx.locale(I18N.buttons.invite))
			.setStyle(ButtonStyle.Link)
			.setURL(
				`https://discord.com/api/oauth2/authorize?client_id=${client.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands`,
			);
		const row = new ActionRowBuilder<ButtonBuilder>().addComponents(inviteButton);
		const embed = this.client
			.embed()
			.setAuthor({
				name: "Ashu's DisPlayer",
				iconURL:
					"https://i.imgur.com/ud3EWNh.jpg",
			})
			.setThumbnail(
				"https://i.imgur.com/ud3EWNh.jpg",
			)
			.setColor(this.client.color.main)
			.addFields(
				{
					name: ctx.locale(I18N.commands.about.fields.creator),
					value: "[Ashu](https://github.com/ashutoshpatraa)",
					inline: true,
				},
				{
					name: ctx.locale(I18N.commands.about.fields.repository),
					value: "[Here](https://github.com/ashutoshpatraa/ashus-displayer)",
					inline: true,
				},
				{
					name: "\u200b",
					value: ctx.locale(I18N.commands.about.fields.description),
					inline: true,
				},
			);
		await ctx.sendMessage({
			content: "",
			embeds: [embed],
			components: [row],
		});
	}
}

/**
 * Project: Ashu's DisPlayer
 * Author: Ashu
 * GitHub: https://github.com/ashutoshpatraa
 * Copyright (c) 2024. All rights reserved.
 */
