# ArticleSummary

The article summary may appear anywhere that several articles appear in a list. This includes an issue's table of contents, a list of search results, and the archive pages for sections and categories.

## Headings

The heading level (`<h*>`) used on the article title must be adjusted based on where the article summary appears. Do not presume it is always `<h2>` or `<h3>`.

## Heading First

The heading (`<h*>`) should appear before all other content in the HTML order of the article summary, including the cover image. This will ensure that all parts of the article summary are accessible to a screen reader navigating directly to this article's heading.

## Lists

The article summary should always appear in a list and the root element should be `<li>`.

## Galley Links

Links to the article galleys should include an `aria-labelledby` attribute which points to the ID of the article title. This will ensure that links are distinctive when presented in a list to a screen reader.

```html
<a id="article-1" href="...">My article title</a>
<a href="..." aria-labelledby="article-1">PDF</a>
```

Consider the case when looking at an issue's table of contents in which each article has a PDF galley. A screen reader will generate a list of all links on the page for the user.

- PDF
- PDF
- PDF
- PDF

The user will not be able to identify which link is related to which article. By linking the article title to the PDF through the `aria-labelledby` attribute, the user will be able to distinguish each link.

- PDF My article title
- PDF A second article title
- PDF The third article title
- PDF The last article title
