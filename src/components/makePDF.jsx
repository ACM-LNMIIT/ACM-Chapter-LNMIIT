// components/makePDF.js
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    backgroundColor: "#1a202c",
  },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: "2 solid #e53e3e",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f7fafc",
    marginBottom: 8,
  },
  metadata: {
    fontSize: 10,
    color: "#a0aec0",
    marginBottom: 4,
  },
  section: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ed8936",
    marginBottom: 8,
  },
  subheading: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ecc94b",
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 11,
    lineHeight: 1.5,
    color: "#cbd5e0",
    marginBottom: 10,
  },
  codeBlock: {
    backgroundColor: "#2d3748",
    padding: 12,
    borderRadius: 6,
    marginVertical: 12,
    fontFamily: "Courier",
    fontSize: 9,
    color: "#e2e8f0",
    borderLeft: "3 solid #3182ce",
  },
  quote: {
    fontStyle: "italic",
    fontSize: 12,
    color: "#b794f4",
    marginVertical: 15,
    paddingLeft: 12,
    borderLeft: "2 solid #805ad5",
  },
  listContainer: {
    marginVertical: 12,
  },
  listItem: {
    fontSize: 11,
    marginBottom: 6,
    flexDirection: "row",
    color: "#cbd5e0",
  },
  bullet: {
    width: 8,
    fontSize: 11,
  },
  footer: {
    marginTop: 20,
    paddingTop: 10,
    borderTop: "1 solid #4a5568",
    fontSize: 9,
    color: "#718096",
    textAlign: "center",
  },
  // New styles for image at the end
  imageSection: {
    marginTop: 25,
    marginBottom: 15,
    alignItems: "center",
  },
  image: {
    width: "80%",
    maxHeight: 200,
    objectFit: "contain",
    borderRadius: 8,
  },
  imageCaption: {
    fontSize: 9,
    color: "#a0aec0",
    marginTop: 5,
    fontStyle: "italic",
    textAlign: "center",
  },
});

// Function to convert webp to jpg for PDF compatibility
const convertImageUrlForPDF = (url) => {
  if (!url) return null;

  // Convert .webp to .jpg
  if (url.includes(".webp")) {
    return url.replace(".webp", ".jpg");
  }

  return url;
};

const PdfDocument = ({ data, type = "blog" }) => {
  // Handle both blog and event data
  const content = data.content || data;
  const originalImageUrl = type === "event" ? data.popupImage : data.thumbnail;
  const imageUrl = convertImageUrlForPDF(originalImageUrl);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with title - AT THE TOP */}
        <View style={styles.header}>
          <Text style={styles.title}>{data.title}</Text>
          {type === "blog" ? (
            <>
              <Text style={styles.metadata}>
                Published: {data.date} | ACM LNMIIT Blog
              </Text>
              <Text style={styles.metadata}>{data.description}</Text>
            </>
          ) : (
            <>
              <Text style={styles.metadata}>
                Event Date: {data.date} | Time: {data.time}
              </Text>
              <Text style={styles.metadata}>Location: {data.location}</Text>
              <Text style={styles.metadata}>Attendees: {data.attendees}</Text>
              <Text style={styles.metadata}>Category: {data.category}</Text>
              <Text style={styles.metadata}>Status: {data.status}</Text>
            </>
          )}
        </View>

        {/* Content sections */}
        {content.intro && (
          <View style={styles.section}>
            <Text style={styles.heading}>
              {type === "blog" ? "Introduction" : "Event Overview"}
            </Text>
            <Text style={styles.paragraph}>{content.intro}</Text>
          </View>
        )}

        {content.subheading && (
          <View style={styles.section}>
            <Text style={styles.subheading}>{content.subheading}</Text>
            <Text style={styles.paragraph}>{content.mainContent}</Text>
          </View>
        )}

        {/* Code Example (for blogs) */}
        {content.codeExample && (
          <View style={styles.codeBlock}>
            <Text>{content.codeExample}</Text>
          </View>
        )}

        {/* Quote */}
        {content.quote && <Text style={styles.quote}>"{content.quote}"</Text>}

        {/* Applications/Features List */}
        {content.applications && (
          <View style={styles.listContainer}>
            <Text style={styles.subheading}>
              {type === "blog" ? "Practical Applications" : "Key Highlights"}
            </Text>
            {content.applications.map((item, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bullet}>• </Text>
                <Text>{item}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Additional event description */}
        {type === "event" && data.description && (
          <View style={styles.section}>
            <Text style={styles.subheading}>Event Description</Text>
            <Text style={styles.paragraph}>{data.description}</Text>
          </View>
        )}

        {/* IMAGE MOVED TO THE END - BEFORE FOOTER */}
        {imageUrl && (
          <View style={styles.imageSection}>
            <Image style={styles.image} src={imageUrl} />
            <Text style={styles.imageCaption}>
              {type === "blog" ? "Blog Thumbnail" : "Event Poster"}
            </Text>
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Generated by ACM LNMIIT Student Chapter</Text>
          <Text>Downloaded on: {new Date().toLocaleDateString()}</Text>
          <Text>www.acm-lnmiit.com</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
