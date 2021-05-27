import {render} from "@testing-library/react";
import ConfirmationDialogHeader from "./ConfirmationDialogHeader";

describe('ConfirmationDialogHeader', () => {
  test('should render H1 with provided issueId', () => {
    const mockId = 142;

    const { getByText } = render(
        <ConfirmationDialogHeader issueId={mockId} />
    );

    expect(getByText(`Delete issue RFM-${mockId}?`)).toBeInTheDocument();
  })
})