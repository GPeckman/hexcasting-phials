ServerEvents.recipes(event => {
	event.shapeless("hexcasting:battery", [Item.of("hexcasting:battery"), Item.of("hexcasting:battery")]).modifyResult((grid, result) => {
		let phials = grid.findAll(Item.of("hexcasting:battery").ignoreNBT())
		let media = 0
		let maxMedia = 0
		let nbt
		phials.forEach(phial => {
			media += phial.nbt["hexcasting:media"]
			maxMedia += phial.nbt["hexcasting:start_media"]
			if (phial.nbt != null) nbt = phial.nbt
		});
		if (nbt == undefined) return itemstack
		nbt["hexcasting:media"] = media
		nbt["hexcasting:start_media"] = maxMedia
		return result.withNBT(nbt)
	});
});
