# Statamic Macrotext

Custom text component for big font size styled text for Statamic 3.

## [Text Fieldset](https://statamic.dev/fieldtypes/text)

To type stuff into the box. Pretty basic.

### Title

### Size


## [What is a fieldset?](https://github.com/statamic/v2-docs/blob/master/content/collections/docs/fieldsets.md#what-is-a-fieldset-what-is-a-fieldset)

A _fieldset_ is YAML file that defines a list of fields used to create content. They're reusuable, highly configurable, and the cornerstone of a customized and tailor-fit Control Panel.

Your fieldsets are kept in the `site/settings/fieldsets` directory. The main section of a fieldset is the `fields` key which allows you to set and configure any number of fields utilizing any combination of the available [fieldtypes](https://github.com/statamic/v2-docs/blob/master/fieldtypes).

An example of what a fieldset might look like:

```
title: Blog Post
fields:
  content:                # The template tag, i.e. {{ content }}
    display: Content      # The CP field label
    type: markdown        # The fieldtype
    instructions: Write!  # Instructional text
    validate: required    # Validation rules
  author:
    display: Author
    type: users
    default: current
    max_items: 1

```