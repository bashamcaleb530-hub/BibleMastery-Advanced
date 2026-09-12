/*
  BibleMastery Library Data
  =========================
  This file stores the books included with BibleMastery Advanced.

  IMPORTANT:
  Only add a book after the exact text/edition has been verified as
  public domain and usable in BibleMastery at no cost.

  Each book can contain:
  - title
  - author
  - publication year
  - category
  - access level
  - public-domain verification note
  - topics
  - doctrines
  - keywords
  - Scripture references
  - full readable sections

  The Library search page will use this information to rank the best
  three relevant sections for a topic, doctrine, Scripture passage,
  keyword, author, book title, or specific study question.
*/

window.BIBLEMASTERY_LIBRARY_BOOKS = [

  /*
  ============================================================
  BOOK TEMPLATE
  ============================================================

  Copy this entire object when adding a verified book.

  {
    id: "unique-book-id",

    title: "Full Book Title",

    author: "Author Name",

    year: "Publication Year",

    category: "Theology",

    access: "starter",

    publicDomainVerified: true,

    sourceNote:
      "Exact edition verified as public domain in the United States. Add source/verification details here.",

    topics: [
      "faith",
      "prayer",
      "grace"
    ],

    doctrines: [
      "faith",
      "salvation"
    ],

    keywords: [
      "believe",
      "trust",
      "redemption"
    ],

    scriptureRefs: [
      "Romans 10:17",
      "Mark 11:22-24"
    ],

    sections: [

      {
        id: "section-1",

        title: "Chapter 1",

        text: `
Full verified public-domain text for this section goes here.
        `.trim(),

        topics: [
          "faith"
        ],

        doctrines: [
          "faith"
        ],

        keywords: [
          "believe",
          "trust"
        ],

        scriptureRefs: [
          "Romans 10:17"
        ]
      }

    ]
  }

  ============================================================
  END BOOK TEMPLATE
  ============================================================
  */

];


/*
  ============================================================
  BIBLEMASTERY STARTER LIBRARY PLAN
  ============================================================

  BibleMastery Advanced will include 12 verified public-domain books.

  Planned slots:

  1.  Book 1  — Not selected yet
  2.  Book 2  — Not selected yet
  3.  Book 3  — Not selected yet
  4.  Book 4  — Not selected yet
  5.  Book 5  — Not selected yet
  6.  Book 6  — Not selected yet
  7.  Book 7  — Not selected yet
  8.  Book 8  — Not selected yet
  9.  Book 9  — Not selected yet
  10. Book 10 — Not selected yet
  11. Book 11 — Not selected yet
  12. Book 12 — Not selected yet

  We will replace these planned slots with real books only after the
  exact edition and text source have been verified.
*/
