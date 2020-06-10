"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TagType;
(function (TagType) {
    TagType[TagType["Paragraph"] = 0] = "Paragraph";
    TagType[TagType["Header1"] = 1] = "Header1";
    TagType[TagType["Header2"] = 2] = "Header2";
    TagType[TagType["Header3"] = 3] = "Header3";
    TagType[TagType["HorizontalRule"] = 4] = "HorizontalRule";
})(TagType = exports.TagType || (exports.TagType = {}));
class TagTypeToHTML {
    constructor() {
        this.tagType = new Map();
        this.tagType.set(TagType.Header1, "h1");
        this.tagType.set(TagType.Header2, "h2");
        this.tagType.set(TagType.Header3, "h3");
        this.tagType.set(TagType.Paragraph, "p");
        this.tagType.set(TagType.HorizontalRule, "hr");
    }
    OpeningTag(tagType) {
        return this.GetTag(tagType, `<`);
    }
    ClosingTag(tagType) {
        return this.GetTag(tagType, `</`);
    }
    GetTag(tagType, openingTagPattern) {
        let tag = this.tagType.get(tagType);
        if (tag !== null) {
            return `${openingTagPattern}${tag}>`;
        }
        return `${openingTagPattern}p>`;
    }
}
exports.default = TagTypeToHTML;
//# sourceMappingURL=Tag.js.map